import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Link } from "../components/Link";
import { SubsectionTitle } from "./SubsectionTitle";
import { useInView } from "react-intersection-observer";
import { Canvas } from "@react-three/fiber";
import Planet from "./Planet";

type HTMLAnchorProps = React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
>;

const convertLinkTagToLinkComponent = ({ href, children }: HTMLAnchorProps) => {
    if (href === undefined || !children) return <span></span>;
    return <Link text={children.toString()} href={href} />;
};

export const AboutParagraph = () => {
    const { ref, inView } = useInView();
    const markdown = `This is the _third_-ever offering of **CS200**, which replaces CS16 and
CS18! Students will take CS200 after taking CS 111, 112, 150, 170, or
190. CS200 is offered every semester (both fall and spring). Hopefully
this will create more flexible options for students. Like CS16/CS18,
CSCI 200 will center around data structures, the design and analysis of
algorithms for performance and social-impacts, and good programming
practices.

The first class (Wednesday, January 25th) will been recorded and in the
Canvas Media Library (lecture capture folder). Refresh the page to see
the link if it isn't up when you first get to the page. You will need to
have the course in your cart to access the recording. We will be taking
questions in real time during class via Ed Discussions. If you have the
course in your cart, you should have access.

_This page is a ***work in progress!*** You can visit the <a href=https://cs.brown.edu/courses/csci0200/>Brown CSCI 200</a>
landing page and view previous offerings here!_`;

    return (
        <div className="basis-2/3 flex flex-col">
            <SubsectionTitle text="CS200" />

            <ReactMarkdown
                className="w-4/5 text-md [&>p]:mb-3"
                rehypePlugins={[rehypeRaw]}
                components={{
                    a: convertLinkTagToLinkComponent,
                }}
            >
                {markdown}
            </ReactMarkdown>

            <div className="h-56">
                <Canvas
                    ref={ref}
                    camera={{
                        fov: 60,
                        position: [0, 0, 1],
                        rotation: [1.16, -0.12, 0.27],
                    }}
                >
                    {inView && <Planet />}
                </Canvas>
            </div>
        </div>
    );
};
