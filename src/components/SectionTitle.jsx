import PropTypes from 'prop-types';

function SectionTitle({ children, id }) {
    return (
        <h1
            id={id || undefined} // If no `id` is passed, it will be undefined
            className="text-3xl font-bold mb-5 text-pink-600 dark:text-pink-500"
        >
            {children}
        </h1>
    );
}

// PropTypes for type safety
SectionTitle.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string
};

export default SectionTitle;
