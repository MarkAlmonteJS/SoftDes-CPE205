"use client"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/component/dropdown-menu"
import { Button } from "../ui/button"
import { Link } from "lucide-react"



export function Shop() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    size='sm'
                >
                    Shop
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>
                    <Link href="/blinds">Blinds
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/curtains">Curtains
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="">Sofa
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="">Table
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}