import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'
import { Button } from "./components/ui/button";
import { Separator} from "./components/ui/separator"
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Slider } from './components/ui/slider';

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload-IA</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed by Taylor
          </span>

          <Separator orientation="vertical" className="h-6" />

          <Button variant="outline">
            {" "}
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Include the pronpt for IA..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Result genered for IA"
              readOnly
            />
          </div>
          <p className="text-sm text-muted-foreground">
            You can use the variable{" "}
            <code className="text-violet-400"> {"{trancription}"}</code> in your
            pronpt for add trancription
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo />
              Loading video
            </label>

            <input
              type="file"
              id="video"
              accept="video/mp4"
              className="sr-only"
            />

            <Separator />
            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Trancription prompt</Label>
              <Textarea
                id="trancription_prompt"
                className="h-20 leading-relaxed"
                placeholder="Include keyword mentioned in the video with a comma(.)"
              ></Textarea>

              <Button type="submit" className="w-full">
                Loading Video
                <Upload className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
          <Separator />
          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select the prompt here"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 30k</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Separator />
            <div className="space-y-2">
              <Label>Temperature</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className='block text-xs text-muted-foreground italic'>Select the intecity of the response</span>
            </div>
            <Separator />
            <Button type="submit" className="w-full">
              Executar
              <Wand2 className="w-4 h-4 ml-2"></Wand2>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}

