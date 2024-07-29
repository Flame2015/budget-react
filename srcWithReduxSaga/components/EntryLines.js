import React from "react";
import { Container } from "semantic-ui-react";
import Entry from "./Entry";


function EntryLines({ entries ,editEntry, description={description} , value={value}}) {



    return (
        <Container>
            {entries.map((entry) =>(
                <Entry
                    key={Math.random()}
                    id={entry.id}
                    description={entry.description}
                    value={entry.value}
                    isExpense={entry.isExpense}
                    editEntry={editEntry}
                    // {...entries}
                    />
            ))}
        </Container>
    )
}

export default EntryLines;