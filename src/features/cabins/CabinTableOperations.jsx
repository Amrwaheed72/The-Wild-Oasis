import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";
import SortBy from "../../ui/SortBy";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No Discount" },
          { value: "with-discount", label: "With Discount" },
        ]}
      />
      <SortBy
        options={[
          {
            value: "regularPrice-asc",
            label: "Sort by Price (Low to High)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by Price (High to Low)",
          },
          {
            value: "name-asc",
            label: "Sort by Name (A-Z)",
          },
          {
            value: "name-desc",
            label: "Sort by Name (Z-A)",
          },
          {
            value: "maxCapacity-asc",
            label: "Sort by Capacity (Low to High)",
          },
          {
            value: "maxCapacity-desc",
            label: "Sort by Capacity (High to Low)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;