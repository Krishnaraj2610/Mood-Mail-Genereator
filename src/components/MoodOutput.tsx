import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Textarea} from '@/components/ui/textarea'

type Props = {
    Subject:string,
    footer:string,
    onReset:()=>void
}

const MoodOutput = ({Subject, footer, onReset}:Props) => {
  return (
    <div className='space-y-4'>
      <div>
        <label className='block font-medium'>Subject</label>
        <Input value={Subject} readOnly/>
      </div>

      <div>
        <label className='block font-medium'>Footer Signature</label>
        <Textarea value={footer}/>
 </div>
      <Button variant="destructive" className='w-full' onClick={onReset}>
        Reset
      </Button>
    </div>
  )
}

export default MoodOutput
