import Content from "./Content"
import OnlineContact from "./OnlineContact"
import Sidebar from "./Sidebar"

const Main = () => {
    return <div className="grid grid-cols-[1fr] md:grid-cols-[1fr_280px] xl:grid-cols-[280px_1fr_280px] bg-grayColor min-h-[calc(100vh_-_65px)] gap-2">
        <Sidebar />
        
        <Content />
        
        <OnlineContact />
    </div>
}

export default Main