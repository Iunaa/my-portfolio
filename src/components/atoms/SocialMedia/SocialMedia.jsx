import Styles from "./socialmedia.module.scss"
export default function SocialMedia (props) {
    return (
        <>
            <a className={Styles.anchor} href={props.href}>
                <img src={`${props.src}`} />
            </a>
        </>
    );
    
}