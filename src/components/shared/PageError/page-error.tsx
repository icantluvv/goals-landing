"use client"

import { Button } from "@/components/ui/Button"

export function PageError({ reset }: { reset?: () => void }) {
    return (
        <div className="flex flex-col items-center h-full justify-center gap-4 text-center">
            <p className="text-body/body text-muted-foreground">Ошибка получения данных</p>
            <Button
                variant="dark"
                size={"large"}
                onClick={reset ?? (() => window.location.reload())}
            >
                Перезагрузить
            </Button>
        </div>
    )
}
