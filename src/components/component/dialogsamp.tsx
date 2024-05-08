import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import React from "react"
import { Label } from "@radix-ui/react-label"
import { Button } from "../ui/button"
import { Input } from "../ui/input"




export function Dialogsamp() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            First Name
                        </Label>
                        <Input
                            id="name"
                            defaultValue="John"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="last" className="text-right">
                            Last Name
                        </Label>
                        <Input
                            id="last"
                            defaultValue="Doe"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            New Email
                        </Label>
                        <Input
                            id="password"
                            placeholder=""
                            className="col-span-3"
                            type="email"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            Previous Password
                        </Label>
                        <Input
                            id="password"
                            className="col-span-3"
                            placeholder="Your old password"
                            type="password"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right">
                            New Password
                        </Label>
                        <Input
                            id="password"
                            placeholder="Your new password"
                            className="col-span-3"
                            type="password"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
