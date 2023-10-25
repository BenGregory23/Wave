import {User, Button, Link} from "@nextui-org/react";

const Header = () => {

    
   

    return (
        <div className="p-5 h-24 lg:h-32  flex justify-center items-center">
            <h1 className="text-center text-4xl font-bold text-gray-800">Map Generator 🎲</h1>
            

            <div className="absolute bottom-0 right-0 p-5 text-gray-800 text-lg flex flex-col gap-2 sm:none">
            
                <User   
                name="Ben Gregory"
                description="Full Stack Developer"
                avatarProps={{
                    src: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette2.wikia.nocookie.net%2Fspongebob%2Fimages%2F9%2F9a%2FSurprised_Patrick.png%2Frevision%2Flatest%3Fcb%3D20150120012730&f=1&nofb=1&ipt=9b17dc338fa94698d09ac9ff155fe41650643b87a6793d8001d342f908d6e861&ipo=images",
                }}
                />

                <Button
                    href="https://github.com/BenGregory23/Wave"
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="solid"
                    >
                    GitHub 🐙
                    </Button>
            </div>
        </div>
    )

}

export default Header