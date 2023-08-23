import { parseISO, format } from 'date-fns';

const Date = ({ dateString }) => {
    const date = parseISO(dateString);

    return (
        <time>
            { format(date, 'LLLL d, yyyy') }
        </time>
    )
}

export default Date;