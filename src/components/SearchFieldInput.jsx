'use client'
import { Button, Label, SearchField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


const SearchFieldInput = () => {

    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        if (search.trim()) {
            console.log("SEARCH INPUT:", search);
            router.push(`/all-cars?search=${search}`);
        } else {
            router.push(`/all-cars`);
        }
    };

    const handleClear = () => {
        setSearch('');
        router.push(`/all-cars`);
    }
    return (
        <div className="flex items-center mb-6">
            <div>
                <SearchField name="search">
                    <Label>Search</Label>
                    <SearchField.Group className={'bg-[#f2f2f2] mb-6 rounded-tr-none rounded-br-none'}>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-[280px]" placeholder=" Search by Car Name" value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <SearchField.ClearButton onClick={handleClear} />
                    </SearchField.Group>
                </SearchField>
            </div>
            <div><Button onPress={handleSearch} className={'bg-red-500 rounded-tl-none rounded-bl-none'}>Search</Button></div>
        </div>
    );
};

export default SearchFieldInput;