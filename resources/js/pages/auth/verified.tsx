import {GalleryVerticalEnd, Mail} from "lucide-react"
import { router } from '@inertiajs/react';
import { useRoute} from "ziggy-js";
import {Button} from "@/components/ui/button";

export default function VerifiedPage() {
    const route = useRoute();
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
              <div className="w-full max-w-xs">
                  <div className="flex flex-col gap-6">
                      <div className="flex flex-col items-center gap-4 text-center">
                          <div className="bg-primary/10 text-primary flex size-16 items-center justify-center rounded-full">
                              <Mail className="size-8" />
                          </div>
                          <div className="flex flex-col gap-2">
                              <h1 className="text-2xl font-bold">Verification complete!</h1>
                              <p className="text-muted-foreground text-sm text-balance">
                                    You can now close this window and return to the application.
                              </p>
                              <Button type="submit" onClick={() => router.get(route("home"))}>
                                  Back to the application
                              </Button>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
