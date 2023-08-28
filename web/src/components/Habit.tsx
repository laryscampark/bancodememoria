import * as Popover from '@radix-ui/react-popover';
import clsx from 'clsx';
import { ProgressBar } from './ProgressBar';
import dayjs from 'dayjs';
import { HabitsList } from './HabitDayPopover';
import { useState } from 'react';

interface HabitDayProps {
  date: Date
  defaultCompleted?: number
  amount?: number
}

export function HabitDay({ defaultCompleted = 0, amount = 0, date }: HabitDayProps) {
  const [completed, setCompleted] = useState(defaultCompleted)

  const comlpetedPercentage = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format('DD/MM')
  const dayOfWeek = dayjs(date).format('dddd')

  function handleCompletedChaged(completed: number) {
    setCompleted(completed)
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background", {
          'bg-violet-50 border-zinc-800': comlpetedPercentage === 0,
          'bg-fuchsia-900 border-fuchsia-500': comlpetedPercentage > 0 && comlpetedPercentage < 20,
          'bg-fuchsia-800 border-fuchsia-500': comlpetedPercentage >= 20 && comlpetedPercentage < 40,
          'bg-fuchsia-700 border-fuchsia-500': comlpetedPercentage >= 40 && comlpetedPercentage < 60,
          'bg-fuchsia-600 border-fuchsia-500': comlpetedPercentage >= 60 && comlpetedPercentage < 80,
          'bg-fuchsia-500 border-fuchsia-400': comlpetedPercentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-violet-400 flex flex-col">
          <span className="font-semibold text-violet-50">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">{dayAndMonth}</span>

          <ProgressBar progress={comlpetedPercentage} />

          <HabitsList date={date} onCompletedChanged={handleCompletedChaged} />

          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}