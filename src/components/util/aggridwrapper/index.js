import React, { PureComponent, Fragment } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { LicenseManager } from 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import './index.less'
LicenseManager.setLicenseKey(`NDEwMjMzMzIwMDAwMA==4776ae9eddc069aad222a64b09b9e834`)

class AgGridWrapper extends PureComponent {
  constructor (props) {
    super(props)
    this.gridOptions = {
      onGridReady: (params) => {
        params.api.sizeColumnsToFit()
        params.api.hideOverlay()
      },
      getRowClass: (params) => {
        return 'ag-row-default'
      },
      localeText: {
        page: 'Trang',
        to: 'đến',
        of: 'trong',
        loadingOoo: 'Đang tải dữ liệu',
        rowGroupColumnsEmptyMessage: 'Kéo thả cột ở đây để nhóm lại',
        selectAll: 'Chọn tất cả',
        searchOoo: 'Tìm kiếm...',
        blanks: 'Trống',
        // for number filter
        equals: 'Bằng',
        notEqual: 'Khác',
        lessThan: 'Nhỏ hơn',
        lessThanOrEqual: 'Nhỏ hơn hoặc bằng',
        greaterThan: 'Lớn hơn',
        greaterThanOrEqual: 'Lớn hơn hoặc bằng',
        inRange: 'Trong khoảng',
        // for text filter
        contains: 'Bao gồm',
        notContains: 'Không bao gồm',
        startsWith: 'Bắt đầu từ',
        endsWith: 'Kết thúc từ',
        // the header of the default group column
        group: 'Nhóm',
        //enterprise menu
        pinColumn: 'Ghim cột',
        pinLeft: 'Ghim trái',
        pinRight: 'Ghim phải',
        noPin: 'Bỏ ghim',
        // enterprise menu aggregation and status panel
        sum: 'Tổng',
        min: 'Nhỏ nhất',
        max: 'Lớn nhất',
        first: 'Đầu tiên',
        last: 'Cuối cùng',
        none: 'Không có giá trị',
        count: 'Số lượng',
        average: 'Trung bình',
        //other
        noRowsToShow: 'Không có dữ liệu',
      }
    }
  }
  render () {
    return (
      <Fragment>
        <div className='ag-theme-balham' style={{ width: '100%', height: '400px' }}>
          <AgGridReact
            columnDefs={this.props.columnDefs}
            rowData={this.props.rowData}
            {...this.props}
            gridOptions={{
              rowHeight: 56,
              ...this.gridOptions
            }}
          />
        </div>
      </Fragment>
    )
  }
}

export { AgGridWrapper }
