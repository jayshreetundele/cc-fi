import { doc, getDoc } from "firebase/firestore";
/* 

1. Setup the database in firebase
2. Read the docs on how to use it

*/




// https://aditi.dev/events

const eventsDemo = [
    {
        "name": "aditi",
        "club": "aditi club",
        "description": "aditi club",
        "image": "aditi club",
        "time": "aditi club",
        "CTA": "aditi club",
    },
    {
        "name": "aditi",
        "club": "aditi club",
        "description": "aditi club",
        "image": "aditi club",
        "time": "aditi club",
        "CTA": "aditi club",
    },
    {
        "name": "aditi",
        "club": "aditi club",
        "description": "aditi club",
        "image": "aditi club",
        "time": "aditi club",
        "CTA": "aditi club",
    },
]



const aditiPage = () => {

    const [events, setEvents] = useState()
    const [selectedClub, setSelectedClub] = useState('All')
    
    useEffect(async () => {

        // const events_endpoint = 'https://aditi.dev/events'

        // // get the data
        // const data = await axios.get(events_endpoint)



        const docRef = doc(db, "cities", "SF");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            // store the data
            setEvents(data)
        } else {
            console.log('Aditi broke me!!!!!!!!!')
        }




    }, [])

    const clubs = ['All' ,'Aditi Club', 'Jayshree Club', 'Manish Club']
    
    const handleClubChange = (club) => setSelectedClub(club)

    return (
        <div>
            <div className={classes.clubsName}>
            {
                clubs.map(club => (
                        <div className={classes.clubAsimov} onClick={handleClubChange(club)}>
                            {club}
                        </div>
                    ))
            }
            </div>

            <div className={classes.eventSection}>
                <div className={classes.eventCards}>
                    {
                        events.map(event => (
                            ((event.club === selectedClub) || (selectedClub === 'All') ) && (
                                <div className={classes.eventCard}>
                                    <div className={classes.eventImage}>
                                    <img src={event.image} alt="" />
                                    </div>
                                    <div className={classes.registerBtn}>{event.CTA}</div>
                                    <div className={classes.eventHeading}>{event.heading}</div>
                                    <div className={classes.eventDescription}>
                                    {event.description}
                                    </div>
                                    <div className={classes.time}>{event.time}</div>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
