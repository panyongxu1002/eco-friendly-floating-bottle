'use client';

import { Button } from '@nextui-org/button';
import { useCompletion } from 'ai/react';
import { useEffect } from 'react';

export default function AIGenerateButton({ setValue }: any) {
  const { completion, isLoading, complete } = useCompletion();

  useEffect(() => {
    if (completion) {
      setValue(completion)
    }
  }, [completion]);

  const clickSubmit = async (e: any) => {
    await complete('test')
  }
  return (
    <div className="flex flex-col w-full max-w-md mx-auto stretch">
      <Button
        type="submit"
        onClick={clickSubmit}
        className='w-full'
        disabled={isLoading}
        // variant="flat"
        color="secondary"
      >AI Generate</Button>
    </div>
  );
}