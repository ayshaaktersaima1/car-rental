"use client";

import { Autocomplete, EmptyState, Label, ListBox, SearchField, useFilter } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Filter({ allCars }) {

    const types = [...new Set(allCars.map((car) => car.carType))];
    const router = useRouter();

    const [selectedKey, setSelectedKey] = useState(null);
    const { contains } = useFilter({ sensitivity: "base" });

    const handleChange = (value) => {
        setSelectedKey(value);
        if (value) {
            router.push(`/all-cars?type=${value}`);
        } else {
            router.push('/all-cars');
        }
    }

    return (
        <div>
            <Autocomplete
                className="w-[256px]"
                placeholder="Select one"
                selectionMode="single"
                value={selectedKey}
                onChange={handleChange}
            >
                <Label>Filter by Car type</Label>
                <Autocomplete.Trigger>
                    <Autocomplete.Value />
                    <Autocomplete.ClearButton />
                    <Autocomplete.Indicator className="size-3">
                        <Icon icon="gravity-ui:chevrons-expand-vertical" />
                    </Autocomplete.Indicator>
                </Autocomplete.Trigger>
                <Autocomplete.Popover>
                    <Autocomplete.Filter filter={contains}>
                        <SearchField autoFocus name="search" variant="secondary">
                            <SearchField.Group>
                                <SearchField.SearchIcon />
                                <SearchField.Input placeholder="Search by car type" />
                                <SearchField.ClearButton />
                            </SearchField.Group>
                        </SearchField>
                        <ListBox renderEmptyState={() => <EmptyState>No results found</EmptyState>}>
                            {types.map((item, index) => (
                                <ListBox.Item key={item} id={item} textValue={item}>
                                    {item}
                                    <ListBox.ItemIndicator />
                                </ListBox.Item>
                            ))}
                        </ListBox>
                    </Autocomplete.Filter>
                </Autocomplete.Popover>
            </Autocomplete>
        </div>
    );
}