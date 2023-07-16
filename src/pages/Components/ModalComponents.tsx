import React from 'react'
import { type PropsWithChildren, type ReactElement } from 'react'

export function ModalTitle ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h2 className='font-semibold text-xl text-left px-5 pt-3'>{children}</h2>)
}

export function ModalSubtitle ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h2 className='font-semibold text-lg text-left px-5 pt-3'>{children}</h2>)
}

export function ModalDates ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h2 className='font-semibold text-md text-left px-5 pt-3'>{children}</h2>)
}

export function ModalDesc ({ children }: PropsWithChildren<unknown>): ReactElement {
  return (<h2 className='font-normal text-md text-left px-5 pt-3 whitespace-pre-line'>{children}</h2>)
}
