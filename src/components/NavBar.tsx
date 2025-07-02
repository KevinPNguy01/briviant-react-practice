
export function NavBar({tabs, tab: selectedTab, setTab} : {tabs: string[], tab: string, setTab: (val: string) => null}) {

    return (
        <nav className="w-full flex gap-4 border-b">
            {tabs.map(tab => (
                <button className={`${selectedTab === tab ? "font-bold" : ""}`} onClick={() => setTab(tab)}>
                    {tab}
                </button>
            ))}
        </nav>
    )
}