import type { ComponentProps, FC, ReactElement } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'

import type { RichText } from '@local/ui/RichText'
import { Icon } from '@local/icons'
import { cn } from '@local/ui/cn'

export type ModalProps = {
  body: ReactElement<typeof RichText>
  className?: string
  onClose: () => void
  open: boolean
} & ComponentProps<'div'>

export const Modal: FC<ModalProps> = ({ body, className, onClose, open }) => {
  return (
    <Dialog className="relative z-20" onClose={onClose} open={open}>
      <div aria-hidden="true" className="fixed inset-0 size-full bg-[#0003]" />
      <div className="fixed inset-0 flex max-h-full max-w-full items-center justify-center">
        <DialogPanel
          className={cn(
            'absolute left-1/2 top-1/2 flex max-h-full max-w-[650px] -translate-x-1/2 -translate-y-1/2 flex-col gap-md rounded-sm bg-white p-lg shadow-xl',
            className,
          )}
        >
          {body}
          <button
            className="absolute right-4 top-4"
            onClick={onClose}
            type="button"
          >
            <Icon name="CloseIcon" size={20} />
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
