import {UserIcon} from "~/components/atoms/UserIcon";
import {useContext} from "react";
import {UserContext} from "~/providers/User.provider";
import {Link} from "@remix-run/react";
import {Avatar, AvatarFallback} from "~/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "~/components/ui/dropdown-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "~/components/ui/dialog";
import LoginForm from "~/components/organisms/LoginForm";
import {Button} from "~/components/ui/button";

export function UserStatus() {
    const {isLogged, user} = useContext(UserContext);


    if (isLogged && user) {
        const {musician} = user;
        const {full_name} = musician;
        const letters = full_name.split(" ").map((name) => name[0]).join("");
        return (
            <div className="flex items-center gap-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarFallback>{letters}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>
                            {full_name}
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem>
                            <Link to={"/account"}>Mon compte</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to={"/events"}>Evènements</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link to={"/logout"}>Se déconnecter</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        )
    }
    return (
        <Dialog>
            <DialogTrigger asChild={true}>
                <Button>
                    <UserIcon/>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <LoginForm onModal={true}/>
            </DialogContent>
        </Dialog>
    )
}