interface ProgressoBarProps {
    progress: number
}

export function ProgressoBar(props: ProgressoBarProps) {
    return (
        <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
            <div
                role="progressbar"
                aria-label="Progresso da atividade completada do dia"
                aria-valuenow={props.progress}
                className="h-3 rounded-xl bg-violet-600"
                style={{
                    width: `${props.progress}%`}}
            />
        </div>

    )
}