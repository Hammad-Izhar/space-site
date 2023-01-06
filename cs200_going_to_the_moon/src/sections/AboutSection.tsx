import ReactMarkdown from "react-markdown";
import { Link } from "../components/Link";
import rehypeRaw from "rehype-raw";

type HTMLAnchorProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

function convertLinkTagToLinkComponent({ href }: HTMLAnchorProps) {
  if (href === undefined) return <span>here</span>;

  return <Link text="here" href={href} />;
}

function AboutSection() {
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

_This page is a ***work in progress!*** You can visit the Brown CSCI 200
landing page and view previous offerings_ <a href=https://cs.brown.edu/courses/csci0200/>here</a>`;

  return (
    <section id="about">
      <ReactMarkdown
        className="w-1/2"
        children={markdown}
        rehypePlugins={[rehypeRaw]}
        components={{
          a: convertLinkTagToLinkComponent,
        }}
      />
    </section>
  );
}

export default AboutSection;
