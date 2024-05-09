/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Uf0FQNUMNpt
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Label } from "@/components/ui/label"
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Banner } from "@/components/component/banner"
import { Carouselblinds } from "@/components/component/carousel1"


export function ProductPage() {
    return (
        <div>
            <Banner></Banner>
            <div className="grid md:grid-cols-2 items-start max-w-6xl px-4 mx-auto gap-6 lg:gap-12 py-6 mt-10">
                <div className="grid gap-4 md:gap-10 items-start">
                    <form className="grid gap-4 md:gap-10">
                        <div className="grid gap-2">
                            <Label className="text-base" htmlFor="size">
                                Name
                            </Label>
                            <RadioGroup className="flex items-center gap-2" defaultValue="m" id="size">
                                <Label
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                    htmlFor="size-60x63"
                                >
                                    <RadioGroupItem id="size-60x63" value="60x63" />
                                    60x63
                                </Label>
                                <Label
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                    htmlFor="size-60x84"
                                >
                                    <RadioGroupItem id="size-60x84" value="60x84" />
                                    60x84
                                </Label>
                                <Label
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                    htmlFor="size-60x96"
                                >
                                    <RadioGroupItem id="size-60x96" value="60x96" />
                                    60x96
                                </Label>
                                <Label
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                    htmlFor="size-60x108"
                                >
                                    <RadioGroupItem id="size-60x108" value="60x108" />
                                    60x108
                                </Label>
                            </RadioGroup>
                            <Label className="text-base" htmlFor="size">
                                Size
                            </Label>
                            <RadioGroup className="flex items-center gap-2" defaultValue="m" id="size">
                                <Label
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                    htmlFor="size-60x63"
                                >
                                    <RadioGroupItem id="size-60x63" value="60x63" />
                                    6FT
                                </Label>
                                <Label
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                    htmlFor="size-60x84"
                                >
                                    <RadioGroupItem id="size-60x84" value="60x84" />
                                    7FT
                                </Label>
                                <Label
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                    htmlFor="size-60x96"
                                >
                                    <RadioGroupItem id="size-60x96" value="60x96" />
                                    8FT
                                </Label>
                                <Label
                                    className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
                                    htmlFor="size-60x108"
                                >
                                    <RadioGroupItem id="size-60x108" value="60x108" />
                                    9FT
                                </Label>
                            </RadioGroup>
                        </div>
                        <Button size="lg">Add to cart</Button>
                    </form>
                </div>
                <div className="grid gap-4 md:gap-10 items-start">
                    <div className="hidden md:flex items-start">
                        <div className="grid gap-4">
                            <h1 className="font-bold text-3xl sm:text-4xl">Variety Name</h1>
                            <div className="grid gap-4">
                                <Carouselblinds />
                            </div>
                            <h2 className="font-bold">Features:</h2>
                            <div>
                                <p>● Dual Layer Design
                                    The alternating opaque and sheer fabric stripes allow you to precisely
                                    adjust the amount sunlight entering your room.

                                </p>
                                <p>
                                    ● Easy Maintenance
                                    Simply use a vacuum cleaner or a damp cloth to maintain or clean these
                                    blinds.
                                </p>
                            </div>
                        </div>
                        <div className="text-4xl font-bold ml-auto">Price</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
