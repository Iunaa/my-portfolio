import { AboveTheFold } from "@/components/organisms/Above_the_fold/AboveTheFold";
import { Contact } from "@/components/organisms/Contact/Contact";
import { Experience } from "@/components/organisms/Experience/Experience";
import { Footer } from "@/components/organisms/Footer/Footer";
import { Projects } from "@/components/organisms/Projects/Projects";

export default function Home() {
    return (
        <div className="container">
            <div className="container--black">
                <AboveTheFold />
                <Experience />
                <Projects />
            </div>
            <div className="container--grey">
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
