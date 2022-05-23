type CellProps = {
  lines?: ('top' | 'right' | 'bottom' | 'left')[]
}

function Cell({ lines, children }: React.PropsWithChildren<CellProps>) {
  return (
    <div className="relative flex h-44 w-44 shrink-0 items-center justify-center">
      {lines?.map((line, index) => {
        switch (line) {
          case 'top':
            return (
              <div
                className="absolute right-1/2 top-0 h-1/2 w-[2px] bg-gray-400"
                key={index}
              />
            )
          case 'right':
            return (
              <div
                className="absolute top-1/2 right-0 h-[2px] w-1/2 bg-gray-400"
                key={index}
              />
            )
          case 'bottom':
            return (
              <div
                className="absolute right-1/2 bottom-0 h-1/2 w-[2px] bg-gray-400"
                key={index}
              />
            )
          case 'left':
            return (
              <div
                className="absolute top-1/2 left-0 h-[2px] w-1/2 bg-gray-400"
                key={index}
              />
            )
        }
      })}
      {children}
    </div>
  )
}

export default Cell