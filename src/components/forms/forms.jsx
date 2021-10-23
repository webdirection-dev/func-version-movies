import Search from "../search";
import Radio from "../radio";

const Forms = (props) => {
    const {
        toPutNameToSearch = Function.prototype,
        toSearch = Function.prototype,
        toPutTypeToSearch = Function.prototype,
    } = props;
    return(
        <>
            <Search
                toPutNameToSearch={toPutNameToSearch}
                toSearch={toSearch}
            />
            <Radio
                toPutTypeToSearch={toPutTypeToSearch}
            />
        </>
    )
}

export default Forms;