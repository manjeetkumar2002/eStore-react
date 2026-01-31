import { useFilterContext } from '../context/filterContext'
import { useTheme } from '../context/themeContext'

const ActiveFilters = () => {
    const {filters,clearFilters} = useFilterContext()
    const theme = useTheme()
  return (
    <div className='border-top gap-3 mt-5 mx-3 py-4 d-flex flex-column flex-sm-row justify-content-between align-items-sm-center align-items-start         '>
        <div className='d-flex gap-3 align-items-end'>
            <h6>Active Filters :</h6>
            <div className='d-flex gap-3 align-items-center' >
                {
                filters.company!="All" ? <button  style={{color: theme.primary, backgroundColor: theme.shadow}} className='btn-md border-0 rounded-4 px-4 py-1 fs-6 fw-semibold d-flex align-items-center gap-1'> {filters.company}  <i className="bi bi-x fs-5 fw-semibold"></i></button>:""
                }
                {
                filters.category!="All" ? <button  style={{color: theme.primary, backgroundColor:  theme.shadow}} className='btn-md border-0 rounded-4 px-4 py-1 fs-6 fw-semibold d-flex align-items-center gap-1'> {filters.category}  <i className="bi bi-x fs-5 fw-semibold"></i></button>:""
                }
                {
                filters.colors!="All" ? <button  style={{color: theme.primary, backgroundColor:  theme.shadow}} className='btn-md border-0 rounded-4 px-4 py-1 fs-6 fw-semibold d-flex align-items-center gap-1'> {filters.colors}  <i className="bi bi-x fs-5 fw-semibold"></i></button>:""
                }
            </div>
        </div>
        <div>
            <button onClick={clearFilters}  className='btn btn-outline-primary rounded-5'>Clear All</button>
        </div>
    </div>
  )
}

export default ActiveFilters