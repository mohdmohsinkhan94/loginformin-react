import './HomePageWraper.css';

function HomePageWraper(props) {
    let classList = 'homepage-wrapper ' + props.className;
    return (
        <div className={classList}>{props.children}</div>
    );
}

export default HomePageWraper;