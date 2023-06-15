import CreationOptions from "../../components/CreationOptions";
import Posts from "../../components/Posts/Posts";
import { useState } from "react";
import { Box } from './layout';

export default function Timeline() {
    const [refresh, setRefresh] = useState(false);
    return (
        <Box>
            <CreationOptions refresh={refresh} setRefresh={setRefresh} />
            <Posts refresh={refresh} setRefresh={setRefresh} />
        </Box>
    )
}