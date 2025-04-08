import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { StartupCardType } from "@/global";

interface IStartupCard {
    post: StartupCardType;
}

const StartupCard = ({ post }: IStartupCard) => {
    const {
        _id,
        _createdAt,
        views,
        description,
        author,
        title,
        category,
        image,
    } = post;

    return (
        <li className="startup-card groups">
            <div className="flex-between">
                <p className="startup_card_date">{formatDate(_createdAt)}</p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-16-medium">{views}</span>
                </div>
            </div>
            <div className="flex-between mt-5 items-center gap-5">
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-16-medium">{author?.name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-26-semibold">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image
                        className="h-12 rounded-full"
                        src={author?.image || ""}
                        width={48}
                        height={48}
                        alt="Author Avatar"
                    />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc">
                    {description && description.length > 500
                        ? description.substring(0, 500) + "..."
                        : description}
                </p>
                <Image
                    src={image || ""}
                    width={250}
                    height={100}
                    alt="Post image"
                    className="startup-card_img"
                />
            </Link>
            <div className="flex-between mt-5 gap-3">
                <Link href={`/?query=${category?.toLowerCase()}`}>
                    <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>Details</Link>
                </Button>
            </div>
        </li>
    );
};

export default StartupCard;
