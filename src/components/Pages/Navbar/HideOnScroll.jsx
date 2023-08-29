import useScrollTrigger from '@mui/material/useScrollTrigger';



function useIsScrolledDown(offset) {
  
    const trigger = useScrollTrigger({
        disableHysteresis:true,
        threshold:offset,
    })
  
    return  trigger  
}

export default  useIsScrolledDown

