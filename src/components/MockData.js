// src/data/mockData.js

export const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Revenue',
        backgroundColor: '#4B5563',
        borderColor: '#111827',
        borderWidth: 1,
        hoverBackgroundColor: '#9CA3AF',
        hoverBorderColor: '#6B7280',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  
  export const chartOptions = {
    scales: {
      y: { beginAtZero: true },
    },
  };
  
  
  export const tableColumns = ['name', 'email', 'role'];
  

  export const LineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Revenue',
        data: [6500, 7000, 8000, 9000, 10000],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };


export const cardColumns = [
    { Header: 'Full Name', accessor: 'fullName' },
    { Header: 'Username', accessor: 'username' },
    { Header: 'Phone', accessor: 'phone' },
    { Header: 'Card Number', accessor: 'cardNumber' },
    { Header: 'Location', accessor: 'location' },
    { Header: 'Job Title', accessor: 'jobTitle' },
    { Header: 'Organization', accessor: 'organization' },
    {
      Header: 'Actions',
      accessor: 'actions',
      Cell: ({ row }) => (
        <div className="space-x-2">
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">View</button> */}
          <button className="bg-red-400 text-white px-4 py-2 rounded">Deactivate</button>
        </div>
      ),
    },
  ];
  

  export const cardData = [
    {
      fullName: 'Paul Michael',
      username: 'paulprogrammer@gmail.com',
      phone: '255767272367',
      cardNumber: '1234 5678 9012 3456',
      location: 'Dodoma Tanzania',
      jobTitle: 'Software Engineer',
      organization: 'e-GA',
    },
    {
      fullName: 'Jane Smith',
      username: 'janesmith',
      phone: '255767272367',
      cardNumber: '2345 6789 0123 4567',
      location: 'Arusha Tanzania',
      jobTitle: 'Product Manager',
      organization: 'CRDB Bank.',
    },
    // Add more sample data as needed
  ];
  

 export const chartData2 = {
    series: [
      {
        name: "Sales",
        data: [30, 40, 45, 50, 49, 60, 70, 91,49, 60, 70, 91]
      }
    ]
  };
  
  const chartOptions2 = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'Monthly Sales Data',
      align: 'left',
      style: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
      },
    },
    subtitle: {
      text: 'Revenue generated from January to August',
      align: 'left',
      margin: 10,
      offsetY: 30,
      style: {
        fontSize: '14px',
        fontWeight: 'normal',
        color: '#666',
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded',
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    tooltip: {
      y: {
        formatter: (val) => `$${val} thousands`,
      },
    },
  };
  
  