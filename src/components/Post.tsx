import { connect } from "http2";

type PostProps = {
    title: string;
    date: string;
    content: string;
}

export default function Post({ title, date, content }: PostProps) {
    return(
        <article className="mb-8 p-4">
            <h3 className="text-2xl font-bold text-blue-700">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
            <p className="mt-2 text-gray-700">{content}</p>
        </article>
    )
}