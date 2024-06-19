export default function TabButton({children, onSelect, isSelected}){

return(
  <li>
    <button className={`${isSelected && 'active'} button`} onClick={onSelect}>{children}</button>
  </li>
)
}
