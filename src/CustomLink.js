import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? "#ffc40c" : "" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {/* {match && "(active)"} */}
        </div>
    );
}

export default CustomLink;