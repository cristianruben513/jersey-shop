"use client"

import { MinusIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons"
import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { type CartLineItemSchema } from "@/lib/validations/cart"

interface UpdateCartProps {
  cartLineItem: CartLineItemSchema
}

export function UpdateCart({ cartLineItem }: UpdateCartProps) {
  const id = React.useId()
  const [isPending, startTransition] = React.useTransition()

  return (
    <div className="flex w-full items-center justify-between space-x-2 xs:w-auto xs:justify-normal">
      <div className="flex items-center">
        <Button
          id={`${id}-decrement`}
          variant="outline"
          size="icon"
          className="size-8 rounded-r-none"
          onClick={() => {
            // Disminuir la cantidad de un producto en el carrito
            // @params: productId, quantity
            console.log("Disminuir la cantidad de un producto en el carrito en 1")
          }}
          disabled={isPending}
        >
          <MinusIcon className="size-3" aria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>
        <Input
          id={`${id}-quantity`}
          type="number"
          min="0"
          className="h-8 w-14 rounded-none border-x-0"
          value={cartLineItem.quantity}
          onChange={() => {
            // Actualizar la cantidad de un producto en el carrito
            // @params: productId, quantity
            console.log("Actualizar la cantidad de un producto en el carrito")
          }}
          disabled={isPending}
        />
        <Button
          id={`${id}-increment`}
          variant="outline"
          size="icon"
          className="size-8 rounded-l-none"
          onClick={() => {
            // Aumentar la cantidad de un producto en el carrito
            // @params: productId, quantity
            console.log("Aumentar la cantidad de un producto en el carrito en 1")
          }}
          disabled={isPending}
        >
          <PlusIcon className="size-3" aria-hidden="true" />
          <span className="sr-only">Add one item</span>
        </Button>
      </div>
      <Button
        id={`${id}-delete`}
        variant="outline"
        size="icon"
        className="size-8"
        onClick={() => {
          // Eliminar un producto del carrito
          // @params: productId
          console.log("Eliminar un producto del carrito")
        }}
        disabled={isPending}
      >
        <TrashIcon className="size-3" aria-hidden="true" />
        <span className="sr-only">Delete item</span>
      </Button>
    </div>
  )
}