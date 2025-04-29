import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from './Banner'

const treks = [
    {
        name: "Jumolhari Trek",
        duration: "7-9 days",
        description: "A scenic trek to the base of Mount Jumolhari, offering stunning views of Bhutan's tallest mountains and pristine landscapes.",
        preparation: "Good fitness level, warm clothing for cold nights, trekking gear."
    },
    {
        name: "Druk Path Trek",
        duration: "5-6 days",
        description: "A beautiful trek connecting Paro and Thimphu, passing through alpine lakes, ridges, and old dzongs (fortresses).",
        preparation: "Moderate fitness, basic trekking equipment, warm layers."
    },
    {
        name: "Snowman Trek",
        duration: "25-30 days",
        description: "One of the hardest treks in the world, traversing remote Himalayan regions and crossing high passes over 5,000 meters.",
        preparation: "Excellent physical condition, acclimatization training, cold weather survival gear."
    },
    {
        name: "Dagala Thousand Lakes Trek",
        duration: "5-6 days",
        description: "A scenic trek through beautiful high-altitude lakes, offering great views of the Himalayan ranges.",
        preparation: "Moderate fitness, waterproof clothing, good hiking boots."
    },
    {
        name: "Merak Sakteng Trek",
        duration: "6-7 days",
        description: "A cultural trek into the isolated valleys of eastern Bhutan, home to the semi-nomadic Brokpa people.",
        preparation: "Moderate fitness, rain protection, cultural sensitivity."
    },
];

const Trek = () => {
    const navigate = useNavigate();
    return (
        <div><Banner />
            <div style={styles.container}>
                <h1 style={styles.heading}>Treks in Bhutan</h1>
                {treks.map((trek, index) => (
                    <div key={index} style={styles.card}>
                        <h2 style={styles.title}>{trek.name}</h2>
                        <p><strong>Duration:</strong> {trek.duration}</p>
                        <p><strong>Description:</strong> {trek.description}</p>
                        <p><strong>Preparation:</strong> {trek.preparation}</p>
                    </div>
                ))}
                <button className='button' onClick={() => navigate('/')} >
                    Home
                </button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
    },
    heading: {
        textAlign: "center",
        marginBottom: "30px",
    },
    card: {
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    },
    title: {
        color: "#2c3e50",
        marginBottom: "10px",
    },
};

export default Trek;
