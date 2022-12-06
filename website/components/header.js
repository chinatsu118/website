import Liink from 'nect/link';

export default function Header(){
    return(
        <ul>
            <li>
                <Link heaf="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link hraf="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    );
}