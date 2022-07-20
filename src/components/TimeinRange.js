function TimeinRange(props) {
  return (
    <div className="timeinrange">
      <div className="timeinrange-header">
        <span>Represents 7 days</span>
        <div className="timeinrange-unit">
          HOURS <span>%</span>
        </div>
      </div>
      <div className="timeinrange-content">
        {
          [
            { value: 'VERY HIGH', bg: '#CEF2F9', color: '#C51A76' },
            { value: 'HIGH', bg: '#D9F7FA', color: '#CA4BF6' },
            { value: 'NORMAL', bg: '#E8E7F0', color: '#7B61FF' },
            { value: 'LOW', bg: '#FAE5FC', color: '#38C0EB' },
            { value: 'VERY LOW', bg: '#F4E0EA', color: '#2E94B4' }
          ].map((item, index) => {
            return (
              <div className="timeinrange-item" key={index}>
                <div className="timeinrange-rect"style={{backgroundColor: item.bg}}>
                  <div className="timeinrange-rect-value" style={
                    {
                      backgroundColor: item.color, width: Array.isArray(props.value) ? props.value[index] : '0%', color: item.bg,
                      display: Array.isArray(props.value) && props.value[index] > '0%' ? '' : 'none'
                    }
                  }>
                    <span style={{display: Array.isArray(props.value) && props.value[index] > '1%' ? '' : 'none'}}>{item.value}</span>
                  </div>
                </div>
                <div className="timeinrange-value" style={{color: item.color}}>
                  { Array.isArray(props.value) ? props.value[index] : '0%' }
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="timeinrange-footer">
        {
          [
            { value: '<54', color: '#CEF2F9', border: 'solid 3px #C51A76' },
            { value: '54-70', color: '#D9F7FA', border: 'solid 3px #CA4BF6' },
            { value: '70-180', color: '#E8E7F0', border: 'solid 3px #7B61FF' },
            { value: '180-250', color: '#FAE5FC', border: 'solid 3px #38C0EB' },
            { value: '>250', color: '#F4E0EA', border: 'solid 3px #2E94B4' }
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