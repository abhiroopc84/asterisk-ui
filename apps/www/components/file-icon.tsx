'use client'

import dynamic from 'next/dynamic'
import { ComponentType, SVGProps } from 'react'

const FileIcon = ({
  extension,
  ...props
}: { extension: string } & SVGProps<SVGSVGElement>) => {
  const Icon = dynamic(
    () => import(`material-icon-theme/icons/${extension}.svg`)
  ) as ComponentType<SVGProps<SVGSVGElement>>

  return <Icon {...props} />
}

export default FileIcon;
