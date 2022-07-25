function TimeinRange(props) {
  return (
    <div className="timeinrange">
      <div className="timeinrange-header">
        {/* <span>Represents 7 days</span> */}
        <span>Time in Range</span>
        <div className="timeinrange-unit">
          HOURS <span>%</span>
        </div>
      </div>
      <div className="timeinrange-content">
        {
          [
            { value: 'VERY HIGH', bg: 'rgba(197, 26, 118, 0.1)', color: '#C51A76' },
            { value: 'HIGH', bg: 'rgba(202, 75, 246, 0.1)', color: '#CA4BF6' },
            { value: 'NORMAL', bg: 'rgba(123, 97, 255, 0.1)', color: '#7B61FF' },
            { value: 'LOW', bg: 'rgba(56, 192, 235, 0.1)', color: '#38C0EB' },
            { value: 'VERY LOW', bg: 'rgba(46, 148, 180, 0.1)', color: '#2E94B4' }
          ].map((item, index) => {
            return (
              <div className="timeinrange-item" key={index}>
                <div className="timeinrange-rect" style={{backgroundColor: item.bg}}>
                  <div className="timeinrange-rect-value" style={
                    {
                      backgroundColor: item.color, height: '40px', width: Array.isArray(props.value) ? props.value[index] + '%' : 0, color: item.bg,
                      display: Array.isArray(props.value) && props.value[index] > 0 ? '' : 'none'
                    }
                  }/>
                  <div className="timeinrange-rect-value">
                    <span style={
                      {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)', color: item.color,
                        display: Array.isArray(props.value) && props.value[index] > 0 ? '' : 'none'}}>{item.value}</span>
                  </div>
                </div>
                <div className="timeinrange-value" style={{color: item.color}}>
                  { Array.isArray(props.value) ? props.value[index] : ''} 
                  <span style={
                      {fontFamily: 'Inter',fontWeight: 600, fontSize:'23px'}}>{'%'}</span>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="timeinrange-footer">
        {
          [
            { value: '<54', color: '#CEF2F9', border: 'solid 3px #2E94B4' },
            { value: '54-70', color: '#D9F7FA', border: 'solid 3px #38C0EB' },
            { value: '70-180', color: '#E8E7F0', border: 'solid 3px #7B61FF' },
            { value: '180-250', color: '#FAE5FC', border: 'solid 3px #CA4BF6' },
            { value: '>250', color: '#F4E0EA', border: 'solid 3px #C41A76' }
          ].map((item, index) => {
            return (
              <div
                className="timeinrange-footer-item-value" key={index}
                style={{ backgroundColor: item.color, borderLeft: item.border }}
              >
                {item.value}
              </div>
            )
          })
        }
        &nbsp;mg/dL
      </div>
    </div>
  )
}

export default TimeinRange;