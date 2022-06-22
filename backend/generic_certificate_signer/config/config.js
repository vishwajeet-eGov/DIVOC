const KAFKA_BOOTSTRAP_SERVER = process.env.KAFKA_BOOTSTRAP_SERVERS || 'localhost:9092';
const KAFKA_CONSUMER_SESSION_TIMEOUT = process.env.KAFKA_CONSUMER_SESSION_TIMEOUT || 300000; // in ms
const HEALTH_CERTIFY_TOPIC = process.env.HEALTH_CERTIFY_TOPIC || 'certify';
const CERTIFICATE_DID = process.env.CERTIFICATE_DID || 'did:india';
const CERTIFICATE_PUBKEY_ID = process.env.CERTIFICATE_PUBKEY_ID || '';
const CERTIFICATE_CONTROLLER_ID = process.env.CERTIFICATE_CONTROLLER_ID || 'https://divoc.dev/';
const CERTIFICATE_ISSUER = process.env.CERTIFICATE_ISSUER || "https://divoc.dev/";
const CERTIFIED_TOPIC = process.env.CERTIFIED_TOPIC || 'health_certified';
const DUPLICATE_CERTIFICATE_TOPIC = process.env.DUPLICATE_CERTIFICATE_TOPIC || 'duplicate_certificate';
const CERTIFICATE_ACK_TOPIC = process.env.CERTIFICATE_ACK_TOPIC || 'health_certify_ack';
const REGISTRY_CERTIFICATE_SCHEMA = process.env.REGISTRY_CERTIFICATE_SCHEMA || 'HealthProfessional';
const CERTIFICATE_RETRY_COUNT = process.env.CERTIFICATE_RETRY_COUNT || 5;
const REGISTRY_URL = process.env.REGISTRY_URL || 'http://localhost:8081/';
const REDIS_ENABLED = process.env.REDIS_ENABLED || true;
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const REDIS_KEY_EXPIRE = process.env.REDIS_KEY_EXPIRE || 2 * 24 * 60 * 60; // in secs
const CERTIFICATE_NAMESPACE = process.env.CERTIFICATE_NAMESPACE || 'https://raw.githubusercontent.com/varadeth/DIVOC/DIV-8511/default-configuration/Contexts/context.json';
const ENABLE_CERTIFY_ACKNOWLEDGEMENT = true;
const NOTIFY_TOPIC = process.env.NOTIFY_TOPIC || 'notify';
const ERROR_CERTIFICATE_TOPIC = process.env.ERROR_CERTIFICATE_TOPIC || 'error_certificate';
const PROC_TOPIC = process.env.PROC_TOPIC || 'proc_status';
const ETCD_URL = process.env.ETCD_URL || 'localhost:2379';
const ETCD_AUTH_ENABLED = process.env.ETCD_AUTH_ENABLED || false;
const ETCD_USERNAME = process.env.ETCD_USERNAME;
const ETCD_PASSWORD = process.env.ETCD_PASSWORD;
const CONFIGURATION_LAYER = process.env.CONFIGURATION_LAYER;
const CONFIG_KEYS = process.env.CONFIG_KEYS;
const ENTITY_TYPE = process.env.ENTITY_TYPE;
const TEMPLATE = process.env.TEMPLATE;

module.exports = {
    KAFKA_BOOTSTRAP_SERVER,
    KAFKA_CONSUMER_SESSION_TIMEOUT,
    HEALTH_CERTIFY_TOPIC,
    CERTIFICATE_DID,
    CERTIFICATE_PUBKEY_ID,
    CERTIFICATE_CONTROLLER_ID,
    CERTIFIED_TOPIC,
    ENABLE_CERTIFY_ACKNOWLEDGEMENT,
    CERTIFICATE_ACK_TOPIC,
    REGISTRY_CERTIFICATE_SCHEMA,
    REGISTRY_URL,
    CERTIFICATE_RETRY_COUNT,
    REDIS_ENABLED,
    CERTIFICATE_ISSUER,
    REDIS_URL,
    REDIS_KEY_EXPIRE,
    CERTIFICATE_NAMESPACE,
    DUPLICATE_CERTIFICATE_TOPIC,
    NOTIFY_TOPIC,
    ERROR_CERTIFICATE_TOPIC,
    PROC_TOPIC,
    ETCD_URL,
    ETCD_AUTH_ENABLED,
    ETCD_USERNAME,
    ETCD_PASSWORD,
    CONFIGURATION_LAYER,
    CONFIG_KEYS,
    TEMPLATE,
    ENTITY_TYPE
};