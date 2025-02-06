import React from 'react';

const About = () => {
    return (
        <div className="p-8 text-white">
            <section className="mb-8">
                <h2 className="text-2xl font-bold">About Get Me a Chai</h2>
                <p className="mt-4">
                    Get Me a Chai is a crowdfunding platform designed for creators to fund their projects with the support of their fans.
                    It’s a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold">How It Works</h3>
                <div className="flex mt-4 gap-8">
                    <div className="w-1/2">
                        <h4 className="font-semibold">Fans Want to Collaborate</h4>
                        <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
                    </div>
                    <div className="w-1/2">
                        <h4 className="font-semibold">Support Through Chai</h4>
                        <p>Receive support from your fans in the form of chai purchases, directly contributing to your project funding.</p>
                    </div>
                </div>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold">Benefits for Creators</h3>
                <ul className="mt-4 list-disc pl-6">
                    <li>Direct financial support from your fanbase</li>
                    <li>Engage with your fans on a more personal level</li>
                    <li>Access to a platform tailored for creative projects</li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold">Benefits for Fans</h3>
                <ul className="mt-4 list-disc pl-6">
                    <li>Directly contribute to the success of your favorite creators</li>
                    <li>Exclusive rewards and perks for supporting creators</li>
                    <li>Be part of the creative process and connect with creators</li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold">Benefits of Collaboration</h3>
                <ul className="mt-4 list-disc pl-6">
                    <li>Unlock new opportunities through collaboration with fellow creators</li>
                    <li>Expand your network and reach a wider audience</li>
                    <li>Combine skills and resources to create innovative projects</li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-bold">Community Engagement</h3>
                <ul className="mt-4 list-disc pl-6">
                    <li>Connect with a supportive community of like-minded individuals</li>
                    <li>Receive valuable feedback and encouragement from peers</li>
                    <li>Participate in discussions and events centered around your interests</li>
                </ul>
            </section>
        </div>
    );
};

export default About;

export const metadata = {
    title: "About - Get Me A Chai"
}