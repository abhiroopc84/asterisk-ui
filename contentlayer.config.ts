import { defineDocumentType, makeSource } from "contentlayer2/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { rehypeCodeBlockTitle } from './lib/rehype-plugin/codeblock-title'
import { visit } from 'unist-util-visit'
import { remarkAdmonition } from './lib/remark-plugin/admonition'


const themes = {
  light: 'light-plus',
  dark: 'dracula'
}

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    published: { type: "boolean", default: true, required: false },
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}` },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
    },
    url: {
      type: "string",
      resolve: (doc) => `/docs/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm, remarkAdmonition],
    rehypePlugins: [
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children

            if (codeEl.tagName !== 'code') return
            node.__rawString__ = codeEl.children?.[0].value
          }
        })
      },
      [
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: themes
        }
      ],
      rehypeCodeBlockTitle,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.tagName === 'admonition') {
            node.properties['__admonition_type__'] =
              node.properties['data-admonition-type']

            const { children } = node
            const title = children[0].children[0].value

            if (title) {
              node.properties['__admonition_title__'] = title
            }
          }
        })
      },
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaLabel: 'Link to section'
          }
        }
      ]
    ],
  },
});
