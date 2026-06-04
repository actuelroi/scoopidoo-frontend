
import { tab } from '@/constants'
import { Checkbox } from '../ui/checkbox'
import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from '../ui/field'
import { ScrollArea } from '../ui/scroll-area'
import { useState } from 'react'


interface SelectSearchProps {
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectSearch = ({
  selected,
  setSelected,
}: SelectSearchProps) => {
  const toggleValue = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <ScrollArea className="h-screen w-full rounded-md border p-4 mb-8">
      <FieldGroup>
        {tab.map((item) => (
          <FieldSet key={item.subtab}>
            <FieldLegend
              variant="label"
              className="text-sm md:text-[16px] font-semibold mb-3"
            >
              {item.subtab}
            </FieldLegend>

            <FieldGroup>
              {item.selectItem.map((sub) => (
                <Field
                  key={sub.value}
                  orientation="horizontal"
                >
                  <Checkbox
                    checked={selected.includes(sub.value)}
                    onCheckedChange={() =>
                      toggleValue(sub.value)
                    }
                  />

                  <FieldLabel className="font-normal">
                    {sub.title}
                  </FieldLabel>
                </Field>
              ))}
            </FieldGroup>

            <FieldSeparator />
          </FieldSet>
        ))}
      </FieldGroup>
    </ScrollArea>
  );
};

export default SelectSearch;


