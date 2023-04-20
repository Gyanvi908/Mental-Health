import React from 'react';

const Card = ({ title, description, image }) => {
  // Check if the title is "Employee Well-Being"
  const isEmployeeWellBeing = title === "Employee Well-Being";

  // Set the background color based on the title
  const backgroundColor = isEmployeeWellBeing ? '#e6e6fa' : '#e6e6fa';

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', flex: '1', maxWidth: '300px', textAlign: 'center', backgroundColor }}>
      <img src={image} alt={title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3 style={{ marginTop: '8px', fontSize: '18px' }}>{title}</h3>
      <p style={{ margin: '0 auto', maxWidth: '80%' }}>{description}</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
        <button style={{ marginRight: '8px', backgroundColor: '#ADD8E6', color: '#333' }}>View Plans</button>
        <button style={{ backgroundColor: '#90EE90', color: '#333' }}>Get Started</button>
      </div>
    </div>
  );
};

const CardGrid = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>The Best Program For Your Organization</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Card
          title=" Wellness Warriors for Employee Well-Being"
          description="Mental health websites can offer information, tools, and resources that promote employee well-being."
          image={require('../assets/emp (1).png')}
        />
        <Card
          title="Wellness Warriors for Employee Assistance Programs"
          description="This website provides the ability to offer same-day availability for your clients and counselling"
          image={require('../assets/sup.png')}
        />
        <Card
          title="Wellness Warriors for universities"
          description=" it provide resources and support for students who may be struggling with mental health challenges"
          image={require('../assets/uni.png')}
        />
        <Card
          title="Wellness Warriors for Non Profit Organization"
          description=" It can help the non-profit to build itself as a credible source of info.& education,& promote its mission & goals."
          image={require('../assets/non.png')}
        />
      </div>
    </div>
  );
};

export default CardGrid;
