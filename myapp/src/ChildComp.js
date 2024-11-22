export default function Childcom(props){
    return(
        <>
        <h3>Hello React I'm your Child</h3>
        {
            props.setfun("My Name is Bob")
        }
        </>

    );
}