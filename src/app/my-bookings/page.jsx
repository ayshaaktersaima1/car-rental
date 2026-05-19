import { Button, Card, CloseButton } from "@heroui/react";
import Image from "next/image";

const MyBookings = () => {
    return (
        <div className='bg-[#f2f2f2]'>
            <div className="pt-32 pb-10 w-[90%] mx-auto">
                <Card className="w-full items-stretch md:flex-row">
                    <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                        <Image fill src={'/assets/banner.jpg'} alt='pic' className=" pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"></Image>
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                        <Card.Header className="gap-1">
                            <Card.Title className="pr-8">Become an ACME Creator!</Card.Title>
                            <Card.Description>
                                Lorem ipsum dolor sit amet consectetur. Sed arcu donec id aliquam dolor sed amet
                                faucibus etiam.
                            </Card.Description>
                            <CloseButton aria-label="Close banner" className="absolute top-3 right-3" />
                        </Card.Header>
                        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-foreground">Only 10 spots</span>
                                <span className="text-xs text-muted">Submission ends Oct 10.</span>
                            </div>
                            <Button className="w-full sm:w-auto">Apply Now</Button>
                        </Card.Footer>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default MyBookings;