import { FormControl } from "@angular/forms"

export function restricted(words: any){
    return (control: FormControl): {[key: string]:any} | null =>
   {
     if (!words) {
       return null
     }
     var invalidwords = words.map((w: any) => control.value.includes(w)? w: null)
     .filter((w:any) => w !=null)
 
 
     return invalidwords && invalidwords.length>0 
     ? {'restricted': invalidwords.join(', ')}
     : null
   }
   }
 